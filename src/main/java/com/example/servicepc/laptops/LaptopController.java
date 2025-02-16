package com.example.servicepc.laptops;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/laptops")
public class LaptopController {

    private final LaptopRepository laptopRepository;

    @Autowired
    public LaptopController(LaptopRepository laptopRepository) {
        this.laptopRepository = laptopRepository;
    }

    // Endpoint to get all laptops
    @GetMapping
    public ResponseEntity<List<Laptop>> getAllLaptops(
            @RequestParam(required = false) Double maxPrice,
            @RequestParam(required = false) String laptopType,
            @RequestParam(required = false) String processorType,
            @RequestParam(required = false) String videoCardType) {

        List<Laptop> laptops;


        if (maxPrice == null && (laptopType == null || laptopType.isEmpty()) &&
                (processorType == null || processorType.isEmpty()) &&
                (videoCardType == null || videoCardType.isEmpty())) {

            laptops = laptopRepository.findAll();
        } else {

            laptops = laptopRepository.findByFilters(maxPrice, laptopType, processorType, videoCardType);
        }

        return ResponseEntity.ok(laptops);
    }



    @GetMapping("/min-price")
    public ResponseEntity<Double> getMinPrice() {
        Double minPrice = laptopRepository.findMinPrice();
        return ResponseEntity.ok(minPrice);
    }

    // Endpoint to get a laptop by its ID
    @GetMapping("/{id}")
    public ResponseEntity<Laptop> getLaptopById(@PathVariable Long id) {
        return laptopRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Endpoint to create a new laptop
    @PostMapping
    public ResponseEntity<Laptop> createLaptop(@RequestBody Laptop laptop) {
        Laptop savedLaptop = laptopRepository.save(laptop);
        return ResponseEntity.status(201).body(savedLaptop);
    }

    // Endpoint to update an existing laptop
    @PutMapping("/{id}")
    public ResponseEntity<Laptop> updateLaptop(@PathVariable Long id, @RequestBody Laptop laptopDetails) {
        return laptopRepository.findById(id)
                .map(laptop -> {
                    laptop.setBrand(laptopDetails.getBrand());
                    laptop.setModel(laptopDetails.getModel());
                    laptop.setPrice(laptopDetails.getPrice());
                    laptop.setSpecifications(laptopDetails.getSpecifications());
                    laptop.setStock(laptopDetails.getStock());
                    laptop.setLaptopType(laptopDetails.getLaptopType());
                    laptop.setProcessorType(laptopDetails.getProcessorType());
                    laptop.setVideoCardType(laptopDetails.getVideoCardType());
                    Laptop updatedLaptop = laptopRepository.save(laptop);
                    return ResponseEntity.ok(updatedLaptop);
                })
                .orElse(ResponseEntity.notFound().build());
    }

//    // Endpoint to delete a laptop by its ID
//    @DeleteMapping("/{id}")
//    public ResponseEntity<Void> deleteLaptop(@PathVariable Long id) {
//        return laptopRepository.findById(id)
//                .map(laptop -> {
//                    laptopRepository.delete(laptop);
//                    return ResponseEntity.noContent().build();
//                })
//                .orElse(ResponseEntity.notFound().build());
//    }
}
