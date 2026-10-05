package com.decroly.backcarrito.model;

import java.util.ArrayList;
import java.util.List;

public class Shop
{
    private String currency;
    private List<Product> products;

    public Shop(String currency) {
        this.currency = currency;
        this.products = new ArrayList<>();

        // Inserto productos en la tienda
        this.products.add(new Product("0K3QOSOV4V","iFhone 13 Pro","938.99"));
        this.products.add(new Product("TGD5XORY1L","Cargador","49.99"));
        this.products.add(new Product("IOKW9BQ9F3","Funda de piel","79.99"));


        // Inserto productos en la tienda
        this.products.add(new Product("G4K8V9N2B1","Laptop UltraSlim","1299.99"));
        this.products.add(new Product("X7P3L9Z8Q5","Auriculares con Cancelación de Ruido","149.50"));
        this.products.add(new Product("M2R6W1C4O8","Ratón Ergonómico Inalámbrico","59.95"));
        this.products.add(new Product("A9T5F0Y3E2","Teclado Mecánico RGB","119.99"));
        this.products.add(new Product("H6J1S7D0K4","Monitor Curvo 27\"","349.00"));
        this.products.add(new Product("E9V8N3B5C1","Smartwatch Z5","210.75"));
        this.products.add(new Product("L4P7O2I9U6","Cámara de Acción 4K","199.99"));
        this.products.add(new Product("Z8X3C5V6B7","Mochila Antirrobo para Portátil","89.90"));
        this.products.add(new Product("Q1W2E3R4T5","Power Bank 20000mAh","45.50"));
        this.products.add(new Product("Y7U8I9O0P1","Altavoz Inteligente con Asistente","99.99"));
    }

    public String getCurrency()
    {
        return currency;
    }

    public List<Product> getProducts()
    {
        return products;
    }
}
