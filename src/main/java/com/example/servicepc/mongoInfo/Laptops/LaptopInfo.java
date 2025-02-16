package com.example.servicepc.mongoInfo.Laptops;


import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "laptops")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class LaptopInfo {
    @Id
    private ObjectId _id;

    private int customId;
    private String nume;
    private String model;
    private double pret;

    private LaptopSpecifications specificatii;

    private String descriere;
}


@Data
@AllArgsConstructor
@NoArgsConstructor
class LaptopSpecifications {
    private LaptopProcesor procesor;
    private LaptopDisplay afisare;
    private LaptopMemory memorie;
    private LaptopHardDisk hard_disk;
    private LaptopVideoCard placa_video;
    private LaptopMultimedia multimedia;
    private LaptopConectivitate conectivitate;
    private String sistem_de_operare;
    private String greutate;
    private String dimensiuni;
    private String culoare;
}

// Clasa LaptopProcesor
@Data
@AllArgsConstructor
@NoArgsConstructor
class LaptopProcesor {
    private String roductor;
    private String tip;
    private String model;
    private String arhitectura;
    private int numar_nuclee;
    private FrequentaNominala frecventa_nominala;
    private FrequentaTurboBoost frecventa_turbo_boost;
    private String cache;
    private String tehnologie;
    private String grafica_integrata;
}


@Data
@AllArgsConstructor
@NoArgsConstructor
class FrequentaNominala {
    private String minima;
    private String maxima;
}


@Data
@AllArgsConstructor
@NoArgsConstructor
class FrequentaTurboBoost {
    private String maxima;
}


@Data
@AllArgsConstructor
@NoArgsConstructor
class LaptopDisplay {
    private String diagonala;
    private String format;
    private String tehnologie;
    private String luminozitate;
    private String finisaj;
    private String rezolutie;
}


@Data
@AllArgsConstructor
@NoArgsConstructor
class LaptopMemory {
    private String capacitate;
    private String tip;
    private String frecventa;
}

// Clasa LaptopHardDisk
@Data
@AllArgsConstructor
@NoArgsConstructor
class LaptopHardDisk {
    private String tip;
    private String capacitate;
    private String interfata;
}


@Data
@AllArgsConstructor
@NoArgsConstructor
class LaptopVideoCard {
    private String tip;
    private String chipset;
}


@Data
@AllArgsConstructor
@NoArgsConstructor
class LaptopMultimedia {
    private String unitate_optica;
    private String camera_web;
    private LaptopAudio audio;
}


@Data
@AllArgsConstructor
@NoArgsConstructor
class LaptopAudio {
    private String difuzoare;
    private String microfoane;
}


@Data
@AllArgsConstructor
@NoArgsConstructor
class LaptopConectivitate {
    private String[] porturi;
    private String wireless;
    private String bluetooth;
}
