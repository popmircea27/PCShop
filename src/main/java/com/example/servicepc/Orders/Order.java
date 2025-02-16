package com.example.servicepc.Orders;




import java.math.BigDecimal;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Getter;

@Getter
@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;

    private Long userId;
    private String comandNumber;
    private BigDecimal price;

    @Column(columnDefinition = "json")
    private String orderedItems;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date dataInceperii;  // Data începerii comenzii

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date dataLivrare;


    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public void setComandNumber(String comandNumber) {
        this.comandNumber = comandNumber;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public void setOrderedItems(String orderedItems) {
        this.orderedItems = orderedItems;
    }
}
