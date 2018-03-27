package com.example.enterprise.models;

import javax.persistence.*;


@Entity
@Table(name = "category")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "brand_name")
    private String brand_name;

    public Category() {}

    public Category(long id, String brand_name) {
        this.id = id;
        this.brand_name = brand_name;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getBrand_name() {
        return brand_name;
    }

    public void setBrand_name(String brand_name) {
        this.brand_name = brand_name;
    }

    public String toString() {
        StringBuilder s = new StringBuilder();
        s.append("Category{")
                .append("id:").append(id)
                .append(",brand_name:").append(brand_name)
                .append("}");
        return s.toString();
    }
}

