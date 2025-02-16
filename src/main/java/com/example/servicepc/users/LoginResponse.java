package com.example.servicepc.users;

public class LoginResponse {
    private String message;
    private Users user;

    public LoginResponse(String message, Users user) {
        this.message = message;
        this.user = user;
    }

    public String getMessage() {
        return message;
    }

    public Users getUser() {
        return user;
    }
}
