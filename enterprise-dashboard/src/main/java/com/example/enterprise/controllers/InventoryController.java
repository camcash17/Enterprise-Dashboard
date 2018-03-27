package com.example.enterprise.controllers;

import com.example.enterprise.models.Inventory;
import com.example.enterprise.repositories.InventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
public class InventoryController {

    @Autowired
    private InventoryRepository inventoryRepo;

    @GetMapping("/inventory")
    public Iterable<Inventory> findAllInventory() {
        return inventoryRepo.findAll();
    }

    @GetMapping("/inventory/{id}")
    public Optional<Inventory> findInventoryById(@PathVariable Long id) {
        return inventoryRepo.findById(id);
    }

    @DeleteMapping("/inventory/{id}")
    public HttpStatus deleteInventoryById(@PathVariable Long id) {
        inventoryRepo.deleteById(id);
        return HttpStatus.OK;
    }

    @PostMapping("/inventory")
    public Inventory createNewInventory(@RequestBody Inventory newInventory) {
        return inventoryRepo.save(newInventory);
    }

    @PatchMapping("/inventory/{id}")
    public Inventory updateInventoryById(@PathVariable Long id, @RequestBody Inventory inventoryRequest) {

        Inventory inventoryFromDb = inventoryRepo.findById(id).get();
        inventoryFromDb.setBrand_name(inventoryRequest.getBrand_name());
        inventoryFromDb.setCount(inventoryRequest.getCount());
        inventoryFromDb.setCategory_id(inventoryRequest.getCategory_id());

        return inventoryRepo.save(inventoryFromDb);
    }

}
//
//    @Autowired
//    private InventoryRepository inventoryRepo;
//
//    @GetMapping("/all")
//    public Iterable<Inventory> getAll() {
//        return inventoryRepo.findAll();
//    }
//
//    @GetMapping("/view/{id}")
//    public Inventory searchById(@PathVariable long id) {
//        return inventoryRepo.findOne(id);
//    }
//
//    @GetMapping("/searchBrand_name/{brand_name}")
//    public Iterable<Inventory> searchByInv_name(@PathVariable String brand_name) {
//        return inventoryRepo.findByBrand_nameContaining(brand_name);
//    }
//
//    @GetMapping("/searchCount")
//    public List<Inventory> searchByCount(@RequestParam int count) {
//        return inventoryRepo.findByCountContaining(count);
//    }
//
//    @GetMapping("/searchContent/{content}")
//    public List<Inventory> searchByCategory_id(@PathVariable int category_id) {
//        return inventoryRepo.findByCategory_idContaining(category_id);
//    }
//
//    @DeleteMapping("/delete/{id}")
//    public HttpStatus deleteInventory(@PathVariable long id) {
//        inventoryRepo.delete(id);
//        return HttpStatus.OK;
//    }
//
//    @PostMapping("/create")
//    public HttpStatus createInventory(@RequestBody Inventory Inventory) {
//        inventoryRepo.save(Inventory);
//        return HttpStatus.OK;
//    }
//
//    @PatchMapping("/update/{id}")
//    public HttpStatus updateInventory(@PathVariable long id, @RequestBody Inventory InventoryRequest) {
//        Inventory Inventory = inventoryRepo.findOne(id);
//        Inventory.setBrand_name(InventoryRequest.getBrand_name());
//        Inventory.setCount(InventoryRequest.getCount));
//        Inventory.setCategory_id(InventoryRequest.getCategory_id());
//        inventoryRepo.save(Inventory);
//        return HttpStatus.OK;
//    }
//}


