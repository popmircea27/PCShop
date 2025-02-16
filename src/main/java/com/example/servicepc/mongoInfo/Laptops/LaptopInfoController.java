package com.example.servicepc.mongoInfo.Laptops;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/laptops")
public class LaptopInfoController {

    @Autowired
    private LaptopInfoService laptopInfoService;

    @GetMapping("/details/{id}")
    public LaptopInfo getLaptopsDetails(@PathVariable int id) {
        System.out.println("Requested laptop ID: " + id);
        return laptopInfoService.getLaptopInfo(id)
                .orElseThrow(() -> new RuntimeException("Laptop not found with customId: " + id));
    }

}
