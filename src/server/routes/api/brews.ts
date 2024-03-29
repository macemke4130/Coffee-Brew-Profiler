import * as express from 'express';
import * as passport from 'passport';
import db from '../../db';
import { ReqUser } from '../../utils/types';

const router = express.Router();

router.get('/details/:brew&:filter', passport.authenticate('jwt'), async (req, res) => {
    try {
        const brewid = Number(req.params.brew);

        if (req.params.filter === "false") {
            const getBrew = await db.brews.oneNoFilter(brewid);
            res.status(200).json({ data: getBrew, status: 418 }); // Just for fun --
        } else {
            const getBrew = await db.brews.one(brewid);
            res.status(200).json({ data: getBrew, status: 418 }); // Just for fun --
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "nope", e});
    }
});

router.get('/delta/:id', passport.authenticate('jwt'), async (req, res) => {
    try {
        // Brew ID id passed in twice due to two subqueries inside the DB call --
        const delta = await db.brews.delta(Number(req.params.id), Number(req.params.id));
        res.status(200).json(delta);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "nope", e});
    }
});

router.get('/list/', passport.authenticate('jwt'), async (req: ReqUser, res) => {
    try {
        const listBrews = await db.brews.list(req.user.id);
        res.status(200).json(listBrews);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "nope", e});
    }
});

router.get('/all/', passport.authenticate('jwt'), async (req: ReqUser, res) => {
    try {
        const getAllBrews = await db.brews.all(req.user.id);
        res.status(200).json(getAllBrews);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "nope", e});
    }
});

router.get('/editpull/:coffee', passport.authenticate('jwt'), async (req, res) => {
    try {
        const editPull = await db.brews.editPull(Number(req.params.coffee));
        res.status(200).json(editPull);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "nope", e});
    }
});

router.post('/new', passport.authenticate('jwt'), async (req, res) => {
    try {
        console.log(req.body);
        const newBrew = await db.brews.insertBrew(req.body);
        res.status(200).json(newBrew);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "nope", e});
    }
});

router.put('/destroy', passport.authenticate('jwt'), async (req, res) => {
    try {
        const destroy = await db.brews.destroy(req.body.id);
        res.status(200).json({ success: 1, destroy });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "nope", e});
    }
});

router.put('/edit', passport.authenticate('jwt'), async (req, res) => {
    try {
        const editBrew = await db.brews.editBrew(req.body, Number(req.body.id));
        res.status(200).json({ success: 1, editBrew });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "nope", e});
    }
});

router.get('/previous/:method', passport.authenticate('jwt'), async (req: ReqUser, res) => {
    try {
        const getPrevious = await db.brews.prev(Number(req.params.method), Number(req.user.id));
        res.status(200).json(getPrevious);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "nope", e});
    }
});
router.get('/methodmatches/:method', passport.authenticate('jwt'), async (req: ReqUser, res) => {
    try {
        const getSameMethod = await db.brews.sameMethod(Number(req.params.method), Number(req.user.id));
        res.status(200).json(getSameMethod);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "nope", e});
    }
});

router.get('/method/:id', passport.authenticate('jwt'), async (req: ReqUser, res) => {
    try {
        const getMethod = await db.brews.getMethod(Number(req.params.id));
        res.status(200).json(getMethod);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "nope", e});
    }
});

export default router;