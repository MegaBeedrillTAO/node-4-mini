let messages = [];

module.exports = {
    getAllMessages: (req, res) => {
        res.status(200).json(messages);
    },
    createMessage: (req, res) => {
    const { username, message } = req.body;
    let newMessage = {
      username,
      message
    };
    messages.push(newMessage);
    res.status(200).send(messages);
    }
}