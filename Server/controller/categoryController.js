import category_schema from "../model/category_schema.js";
import product_schema from "../model/product_schema.js";
import slugify from "slugify";  // is for improving seo of your website
import fs from "fs";
import { randomFillSync } from "crypto";


export const CategoryController = async (req, res) => {

    const { name } = req.body;
    if (!name) {
        return res.status(422).json({ error: "required" });
    }

    try {
        const categoryExist = await category_schema.findOne({ name: name })
        if (categoryExist) {
            return res.status(422).json({ error: "category already exists" });
        }

        const category = await new category_schema({
            name,
            slug: slugify(name),
        }).save();
        res.status(201).send({
            success: true,
            message: "new category added",
            category,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "error in making",
        });
    }
};

export const ProductController = async (req, res) => {

    try {
        const { pname, slug, description, price, category, quantity, shipping } = req.fields;
        const { photo } = req.files;

        switch (true) {
            case !pname:
                return res.status(500).send({ error: "name required" });
            case !description:
                return res.status(500).send({ error: "description required" });
            case !price:
                return res.status(500).send({ error: "price required" });
            case !quantity:
                return res.status(500).send({ error: "quantity required" });
            // case photo.size > 1000000:
            //     return res.status(500).send({ error: "pic too large" });

        }

        const products = new product_schema({ ...req.fields, slug: slugify(pname) });
        if (photo) {
            products.photo.data = fs.readFileSync(photo.path);
            products.photo.contentType = photo.type;
        }
        await products.save();
        res.status(201).send({
            success: true,
            message: "Product created!",
            products,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "something gone wong",
        });
    }
};


export const UpdateCategoryController = async (req, res) => {
    try { 
        const { name } = req.body;
        const { id } = req.params;
        const category = await category_schema.findByIdAndUpdate(
            id,
            { name, slug: slugify(name) },
            { new: true}
        );
        res.status(200).send({
            success: true,
            message: "Category Updated",
            category,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "something wongg",
        });
    }
};


export const allcategoryController = async (req, res) => {
    try{
        const category = await category_schema.find({});
        res.status(200).send({
            success: true,
            message: "All Categories",
            category,
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error: no found",
        });
    }
};

export const singlecategoryController = async (req, res) => {
    try {
        const category = await category_schema.findOne({ slug: req.params.slug });
        res.status(200).send({
            success: true,
            message: "single category",
            category,   
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "error, non category",
        });
    }
};



export const DeletecategoryController = async (req, res) => {
    try {
        const { id } = req.params;
        await category_schema.findByIdAndDelete(id);
        res.status(200).send({
            success: true,
            message: 'delete successful',
            
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "error, not deleted",
            error,
        });
    }
};

export const GetallproductsController = async (req, res) => {
    try {
        const products = await product_schema.find({})
        .select("-photo") // gets products except photos so that it loads faster
        // .populate("categories")
        .limit(12) // 12 response at a time
        .sort({ createdAt: -1}); // latest first
        res.status(200).send({
            success: true,
            message: "all-products",
            total_products: products.length,
            products,
            
        });
    } catch(error) {
console.log(error)
res.status(500).send({
    success: false,
    message: "errorro",
    error: error.message
})
    }
};

export const GetSingleProductController = async (req, res) => {
    try{
        
        const product = await product_schema.findOne({slug: req.params.slug}).select("-photo")
           // .populate("category")
        res.status(200).send({
            success: true,
            message: "here is your request",
            product
        })
    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success: false,
            message: "eroeor",
            error: error.message
        })
    }
};

export const PhotoController = async (req, res) => {
    try{
        const product = await product_schema.findById(req.params.pid).select("photo"); //will onlyy select photo
        if(product.photo.data){
            res.set("Content-type", product.photo.contentType);
            return res.status(200).send(product.photo.data);
        }
    }
    catch(error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"errero",
            error: error.message
        })
    }
};

export const DeleteProductController = async (req, res) => {
    try{
        await product_schema.findByIdAndDelete(req.params.id);
        res.status(200).send({
            success: true,
            message: "Product deleted"
        });
    }
    catch{
        console.log(error);
        res.status(500).send({
            success:false,
            message:"errero",
            error: error.message
        })
    }
}

export const UpdateProductController = async (req, res) => {
    try {
        const { pname, slug, description, price, category, quantity, shipping } = req.fields;
        const { photo } = req.files;

        switch (true) {
            case !pname:
                return res.status(500).send({ error: "name required" });
            case !description:
                return res.status(500).send({ error: "description required" });
            case !price:
                return res.status(500).send({ error: "price required" });
            case !quantity:
                return res.status(500).send({ error: "quantity required" });
          

        }

        const products = await product_schema.findByIdAndUpdate(req.params.id,
            {...req.fields, slug:slugify(pname)}, {new:true});
        if (photo) {
            products.photo.data = fs.readFileSync(photo.path);
            products.photo.contentType = photo.type;
        }
        await products.save();
        res.status(201).send({
            success: true,
            message: "Product Updated!",
            products,
        });
    } 
    catch {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"errero",
            error: error.message
        })
    }
}


export const ProductFiltersController = async (req, res) => {
    try{

        const {checked, radio } = req.body;
        
        let args = {};
        if (checked.length > 0) args.category = checked;
        if (radio.length) args.price = { $gte: radio[0], $lte: radio[1] };
        const products = await product_schema.find(args);
        res.status(200).send({
            success: true,
            products,
        });
    }
    catch (error) {
        console.log(error)
        res.status(400).send({
            success: false,
            message: "errerro",
            error
        })
    }
}


export const ProductCountController = async (req, res) => {
    try{
        const total = await product_schema.find({}).estimatedDocumentCount();
        res.status(200).send({
            success: true,
            total,
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).send({
            message: "errerro",
            error,
            success: false,
        });

    }
};

export const ProductListController = async (req, res) => {
    try{
        const perPage = 2;
        const page = req.params.page ?  req.params.page : 1;
        const products = await product_schema.find({})
            .select("-photo")
            .skip((page - 1) * perPage)
            .limit(perPage)
            .sort({ createdAt: -1 });
            res.status(200).send({
                success: true,
                products,
            }); 
    }
    catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            message: "errero",
            error,
        });
    }
};


export const SearchProductController = async (req, res) => {
    try{
        const {keyword} = req.params;
        const results = await product_schema.find({
            $or: [
                {pname:{$regex :keyword, $options:"i"}},
                {description:{$regex :keyword, $options:"i"}}
            ]
        }).select("-photo")
        res.join(results)
    }
    catch(error){
        console.log(error)
        res.status(400).send({
            success: false,
            message: "errerro",
            error
        });
    }
};

export const RelatedProductController = async (req, res) => {
    try{
        const {pid, cid} = req.params;
        const products = await product_schema.find({
            category: cid,
            _id: { $ne: pid},
        }).select("-photo").limit(3).populate("category");
        res.status(200).send({
            success: true,
            products,
        });
    }
    catch(error) {
        console.log(error);
        res.status(400).send({
            success: false,
            message: "errero",
            error
        })
    }
};


