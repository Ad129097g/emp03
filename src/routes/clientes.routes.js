import {Router} from 'express'

const router = Router();

//--------LISTADO --------------------------------------------//
router.get('/list', async(req, res)=>{
    try{
        res.render('clientes/list');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

//--------AÑADIR --------------------------------------------//

router.get('/add', (req,res)=>{
    res.render('clientes/add');
});

router.post('/add', async(req, res)=>{
    try{
        res.redirect('/list');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

//--------ACTUALIZAR --------------------------------------------//

router.get('/edit', (req,res)=>{
    res.render('clientes/edit');
});

router.post('/edit', async(req, res)=>{
    try{
        res.redirect('/list');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

//----------- CATEGORIA -----------------------------------------//

router.get('/categoria', (req,res)=>{
    res.render('clientes/categoria');
});

router.post('/categoria', async(req, res)=>{
    try{
        res.redirect('/list');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});
//-----------  PRODUCTO -----------------------------------------//

router.get('/producto', (req,res)=>{
    res.render('clientes/producto');
});

router.post('/producto', async(req, res)=>{
    try{
        res.redirect('/list');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});



export default router;



