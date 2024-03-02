// Create web server using express. use express.Router(). create commentController for CRUD operations.

const express = require('express');
const commentController = require('../controllers/comments');

const router = express.Router();

router.get('/', commentController.getAllComments);
router.get('/:id', commentController.getCommentById);
router.post('/', commentController.createComment);
router.put('/:id', commentController.updateComment);
router.delete('/:id', commentController.deleteComment);

module.exports = router;

