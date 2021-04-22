<?php

// src/Controller/DefaultController.php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PedidosController extends AbstractController
{
    // ...

    public function index(): Response
    {

        // the template path is the relative file path from `templates/`
        return $this->render('pedidos/index.html.twig', []);
    }
}