package com.example.enterprise.controllers;

import com.example.enterprise.models.Category;
import com.example.enterprise.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
public class CategoriesController {

    @Autowired
    private CategoryRepository categoryRepo;

    @GetMapping("/categories")
    public Iterable<Category> findAllCategories() {
        return categoryRepo.findAll();
    }

    @GetMapping("/categories/{id}")
    public Optional<Category> findCategoryById(@PathVariable Long id) {
        return categoryRepo.findById(id);
    }

    @DeleteMapping("/categories/{id}")
    public HttpStatus deleteCategoryById(@PathVariable Long id) {
        categoryRepo.deleteById(id);
        return HttpStatus.OK;
    }

    @PostMapping("/categories")
    public Category createNewCategory(@RequestBody Category newCategory) {
        return categoryRepo.save(newCategory);
    }

    @PatchMapping("/categories/{id}")
    public Category updateCategoryById(@PathVariable Long id, @RequestBody Category categoryRequest) {

        Category categoryFromDb = categoryRepo.findById(id).get();
        categoryFromDb.setBrand_name(categoryRequest.getBrand_name());

        return categoryRepo.save(categoryFromDb);
    }

}
