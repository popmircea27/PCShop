package com.example.servicepc.users;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends JpaRepository<Users, Long> {
    Users findByUsername(String username);
    long countByUsername(String username);

    @Transactional
    @Modifying
    @Query("UPDATE Users u SET u.status = :status WHERE u.username = :username")
    void updateStatusByUsername(String username, String status);
}
