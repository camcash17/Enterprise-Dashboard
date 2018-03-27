package com.example.enterprise.models;

import javax.persistence.*;


@Entity
@Table(name = "inventory")
public class Inventory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "brand_name")
    private String brand_name;
    @Column(name = "count")
    private int count;
    @Column(name = "category_id")
    private int category_id;

    public Inventory() {}

    public Inventory(long id, String brand_name, int count, int category_id) {
        this.id = id;
        this.brand_name = brand_name;
        this.count = count;
        this.category_id = category_id;
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

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public int getCategory_id() {
        return category_id;
    }

    public void setCategory_id(int category_id) {
        this.category_id = category_id;
    }

//    public String toString() {
//        StringBuilder s = new StringBuilder();
//        s.append("Inventory{")
//                .append("id:").append(id)
//                .append(",brand_name:").append(brand_name)
//                .append(",count:").append(count)
//                .append(",category_id:").append(category_id)
//                .append("}");
//        return s.toString();
//    }
}
