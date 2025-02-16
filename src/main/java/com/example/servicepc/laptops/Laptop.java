package com.example.servicepc.laptops;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Entity
@Table(name = "laptops")
@AllArgsConstructor
@NoArgsConstructor
public class Laptop {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = true)
    private String brand;

    @Column(nullable = true)
    private String model;

    @Column(nullable = true)
    private BigDecimal price;

    @Column(nullable = true)
    private String specifications;

    @Column(nullable = true)
    private int stock;

    @Column(name = "laptop_type", nullable = true)
    private String laptopType;

    @Column(name = "processor_type", nullable = true)
    private String processorType;

    @Column(name = "video_card_type", nullable = true)
    private String videoCardType;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getSpecifications() {
        return specifications;
    }

    public void setSpecifications(String specifications) {
        this.specifications = specifications;
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    public String getLaptopType() {
        return laptopType;
    }

    public void setLaptopType(String laptopType) {
        this.laptopType = laptopType;
    }

    public String getProcessorType() {
        return processorType;
    }

    public void setProcessorType(String processorType) {
        this.processorType = processorType;
    }

    public String getVideoCardType() {
        return videoCardType;
    }

    public void setVideoCardType(String videoCardType) {
        this.videoCardType = videoCardType;
    }

    @Override
    public String toString() {
        return "Laptop{" +
                "id=" + id +
                ", brand='" + brand + '\'' +
                ", model='" + model + '\'' +
                ", price=" + price +
                ", specifications='" + specifications + '\'' +
                ", stock=" + stock +
                ", laptopType='" + laptopType + '\'' +
                ", processorType='" + processorType + '\'' +
                ", videoCardType='" + videoCardType + '\'' +
                '}';
    }
}
