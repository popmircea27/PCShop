package com.example.servicepc.mongoInfo.Laptops;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LaptopInfoService {

    @Autowired
    private LaptopSpecsRepository laptopSpecsRepository;

    public Optional<LaptopInfo> getLaptopInfo(int id) {
        Optional<LaptopInfo> laptopInfo = laptopSpecsRepository.findByCustomId(id);
        System.out.println("Found laptop: " + laptopInfo.isPresent());
        return laptopInfo;
    }

}
