<?php

// src/Controller/DefaultController.php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use \Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use DateTime;
use DateTimeZone;
use App\Entity\Cliente;
use App\Entity\Pedido;
use App\Entity\Producto;

class PedidosController extends AbstractController
{
    // ...

    public function index(): Response
    {

        return $this->render('pedidos/index.html.twig', []);
    }

    public function newCliente(Request $request)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $nombre = $request->query->get('nombre');

        $cliente = new Cliente();
        $cliente->setNombre($nombre);
        $entityManager->persist($cliente);

        $entityManager->flush();

        return $this->json([
            'message' => 'Done'
        ]);
    }

    public function getClientes()
    {
        $entityManager = $this->getDoctrine()->getManager();
        $clientes =  $entityManager->getRepository('App\Entity\Cliente')->findAll();
        $result = [];
        foreach ($clientes as $p){
            $r = [];
            $r['id'] = $p->getId();
            $r['nombre'] = $p->getNombre();

            array_push($result, $r);
        }


        return new JsonResponse($result);
    }

    public function updateCliente(Request $request)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $id = $request->query->get('id');
        $nombre = $request->query->get('nombre');

        $cliente =  $entityManager->getRepository('App\Entity\Cliente')->find($id);

        if (!$cliente) {
            throw $this->createNotFoundException(
                'Missing '.$id
            );
        }

        $cliente->setNombre($nombre);
        $entityManager->flush();

        return $this->json([
            'message' => 'done'
        ]);
    }





    public function newProducto(Request $request)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $nombre = $request->query->get('nombre');
        $precio = $request->query->get('precio');

        $product = new Producto();
        $product->setNombre($nombre);
        $product->setPrecio($precio);
        $entityManager->persist($product);

        $entityManager->flush();

        return $this->json([
            'message' => 'done'
        ]);
    }

    public function getProductos()
    {
        $entityManager = $this->getDoctrine()->getManager();
        $productos =  $entityManager->getRepository('App\Entity\Producto')->findAll();
        $result = [];
        foreach ($productos as $p){
            $r = [];
            $r['id'] = $p->getId();
            $r['nombre'] = $p->getNombre();
            $r['precio'] = $p->getPrecio();

            array_push($result, $r);
        }


        return new JsonResponse($result);
    }

    public function updateProducto(Request $request)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $id = $request->query->get('id');
        $nombre = $request->query->get('nombre');
        $precio = $request->query->get('precio');

        $producto =  $entityManager->getRepository('App\Entity\Producto')->find($id);

        if (!$producto) {
            throw $this->createNotFoundException(
                'Missing '.$id
            );
        }

        $producto->setNombre($nombre);
        $producto->setPrecio($precio);
        $entityManager->flush();

        return $this->json([
            'message' => 'done'
        ]);
    }





    public function newPedido(Request $request)
    {
        $entityManager = $this->getDoctrine()->getManager();

        $idCliente = $request->query->get('idCliente');
        if (!$idCliente) {
            throw $this->createNotFoundException(
                'Missing client id '.$idCliente
            );
        }

        $precio = $request->query->get('precio');
        $cliente = $entityManager->find('App\Entity\Cliente',$idCliente);

        $pedido = new Pedido();
        $pedido->setIdCliente($cliente);
        $currentDateTime = new DateTime( date("Y-m-d"),new DateTimeZone('Europe/London'));
        $pedido->setFechaCreacion($currentDateTime);
        $pedido->setImporte($precio);
        $entityManager->persist($pedido);

        $entityManager->flush();

        return $this->json([
            'message' => 'done' ,
        ]);
    }

    public function getPedidos()
    {
        $entityManager = $this->getDoctrine()->getManager();
        $pedidos =  $entityManager->getRepository('App\Entity\Pedido')->findAll();
        $result = [];


        foreach ($pedidos as $p){
            $r = [];
            $r['id'] = $p->getId();
            $r['fecha'] = $p->getFechaCreacion();
            $r['id_cliente'] = $entityManager->find('App\Entity\Cliente',$p->getIdCliente())->getId();
            $r['precio'] = $p->getImporte();

            array_push($result, $r);
        }


        return new JsonResponse($result);
    }

    public function updatePedido(Request $request)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $id = $request->query->get('id');
        $precio = $request->query->get('precio');

        $pedido =  $entityManager->getRepository('App\Entity\Pedido')->find($id);

        if (!$pedido) {
            throw $this->createNotFoundException(
                'Missing '.$id
            );
        }

        $pedido->setImporte($precio);
        $entityManager->flush();

        return $this->json([
            'message' => 'done'
        ]);
    }
}