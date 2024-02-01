import express from 'express';
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import {
  CategoryController,
  UpdateCategoryController,
  allcategoryController,
  singlecategoryController,
  DeletecategoryController,
  GetallproductsController,
  GetSingleProductController,
  PhotoController,
  DeleteProductController,
  UpdateProductController,
  ProductFiltersController,
  ProductCountController,
  ProductListController,
  SearchProductController,
  RelatedProductController
} from "../controller/categoryController.js";
import { ProductController } from '../controller/categoryController.js';
import formidable from 'express-formidable';


const router = express.Router();

router.post("/create-category",
  //  isAdmin, requireSignIn, // turn this on when posting through admin dashboard
  CategoryController);

router.post("/create-product", formidable(), ProductController);



router.get("/all-category", allcategoryController);

router.get("/single-category", singlecategoryController);

router.delete("/delete-category/:id", DeletecategoryController);

router.put("/update-category/:id", UpdateCategoryController);

router.get("/get-product", GetallproductsController);

router.get("/get-product/:slug", GetSingleProductController);

router.get("/get-photo/:pid", PhotoController)

router.delete("/delete-product/:id", DeleteProductController)

router.put("/update-product/:id", formidable(), UpdateProductController)

router.post("/product-filters", ProductFiltersController)

router.get("/product-count",  ProductCountController)

router.get("/product-list/:page", ProductListController)

router.get("/search/:keyword", SearchProductController)

router.get("/related-product/:pid/:cid", RelatedProductController)

export default router;