<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends AbstractController
{

    public function index(): Response
    {

        // the template path is the relative file path from `templates/`
        return $this->render('home/index.html.twig', []);
    }
}