class ReadTransactionController {
  async handle(req, res) {
    const clientId = req.query.clientId
      ? Number(req.query.clientId)
      : undefined;
    const type = req.query.type ? req.query.type : undefined;
    const status = req.query.status ? req.query.status : undefined;
    const data = req.query.date ? new Date(req.query.date) : undefined;
  }
}

export { ReadTransactionController };
