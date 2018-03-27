package com.example.enterprise.repositories;

import com.example.enterprise.models.Category;
import org.springframework.data.repository.CrudRepository;

public interface CategoryRepository extends CrudRepository<Category, Long> {
}
