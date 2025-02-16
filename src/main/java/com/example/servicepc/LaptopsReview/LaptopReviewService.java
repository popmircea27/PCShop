package com.example.servicepc.LaptopsReview;

import com.example.servicepc.laptops.Laptop;
import com.example.servicepc.laptops.LaptopRepository;
import com.example.servicepc.users.Users;
import com.example.servicepc.users.UsersRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class LaptopReviewService {

    private final LaptopReviewRepository laptopReviewRepository;
    private final LaptopRepository laptopRepository;
    private final UsersRepository usersRepository;

    @Autowired
    public LaptopReviewService(LaptopReviewRepository laptopReviewRepository,
                               LaptopRepository laptopRepository,
                               UsersRepository usersRepository) {
        this.laptopReviewRepository = laptopReviewRepository;
        this.laptopRepository = laptopRepository;
        this.usersRepository = usersRepository;
    }

    public LaptopReview saveLaptopReview(LaptopReviewDTO laptopReviewDTO) {
        System.out.println("1    "+laptopReviewDTO.getLaptopId());
        Laptop laptop = laptopRepository.findById(laptopReviewDTO.getLaptopId())
                .orElseThrow(() -> new EntityNotFoundException("Laptop not found!"));
        System.out.println("2");
        Users user = usersRepository.findById(laptopReviewDTO.getUserId())
                .orElseThrow(() -> new EntityNotFoundException("User not found!"));

        // Creează entitatea LaptopReview
        LaptopReview laptopReview = new LaptopReview();
        System.out.println("3");
        laptopReview.setLaptop(laptop);
        laptopReview.setUser(user);
        laptopReview.setRating(laptopReviewDTO.getRating());
        laptopReview.setBodyReview(laptopReviewDTO.getBodyReview());
        laptopReview.setDataCreare(laptopReviewDTO.getDataCreare());
        System.out.println("4");
        return laptopReviewRepository.save(laptopReview);
    }
    public List<LaptopReview> getReviewsByLaptopId(Long laptopId) {
        return laptopReviewRepository.findAllByLaptop_Id(laptopId);
    }
    public List<LaptopReview> findReviewsByUsername(String username) {
        return laptopReviewRepository.findByUser_Username(username);
    }
}


