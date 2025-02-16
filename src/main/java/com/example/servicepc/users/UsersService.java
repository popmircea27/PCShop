package com.example.servicepc.users;

import com.example.servicepc.email.EmailSender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsersService implements UserDetailsService {

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private  EmailSender emailSender;
    public Users registerUser(Users user) {
        // Criptarea parolei înainte de a salva utilizatorul
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return usersRepository.save(user);
    }
    public Users findUserByUsername(String username) {
        return usersRepository.findByUsername(username);
    }
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users user = usersRepository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }
        return user;
    }
    // Găsește un utilizator pe baza username
    public Optional<Users> getUserByUsername(String username) {
        return Optional.ofNullable(usersRepository.findByUsername(username));
    }
    public long countUsersByUsername(String username) {
        return usersRepository.countByUsername(username); // Această metodă trebuie să fie definită în UsersRepository
    }
    public String getStatusByUsername(String username) {
        Users user = usersRepository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("Username not found: " + username);
        }
        return user.getStatus();
    }


    public void sendVerificationEmail(String username) {
        Users user = usersRepository.findByUsername(username);
        if(user==null){
            System.out.println("userNull");
        }
        String emailContent = "<p>Hi " + username + ",</p>"
                + "<p>Please confirm your email address by clicking the link below:</p>"
                + "<a href='http://example.com/verify?username=" + username + "'>Verify Email</a>"
                + "<p>Thank you!</p>";

        emailSender.send(user.getEmail(), emailContent);
    }

    public void verifyUser(String username) {
        Users user = usersRepository.findByUsername(username);
        if (user == null) {
            throw new IllegalArgumentException("User not found");
        }
        usersRepository.updateStatusByUsername(username, "verified");
    }
}
