package com.example.servicepc.laptops;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/laptops")
public class LaptopController {

    @Autowired
    private LaptopRepository laptopRepository;

    @GetMapping
    public ResponseEntity<List<Laptop>> getAllLaptops() {
        List<Laptop> laptops = laptopRepository.findAll();
        if (laptops.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        // here i nned to convert laptop list intr o a json format

        System.out.println(laptops.toString());
        return ResponseEntity.ok(laptops);
    }
}
