module.exports = {
  create: async (req, res) => {
    const db = req.app.get('db')
    const { name, description, image_url, price } = req.body

    db.create_product(name, description, price, image_url)
      .then(all => res.status(200).send(all))
      .catch(err => res.status(500).send('Did not create product'))

  },

  getOne: (req, res) => {
    const db = req.app.get('db')
    const { product_id } = req.params

    db.read_product(product_id)
      .then(single => res.status(200).send(single))
      .catch(err => res.status(500).send('Cant find product'))
  },

  getAll: (req, res) => {
    const db = req.app.get('db')

    db.read_products()
      .then(all => res.status(200).send(all))
      .catcg(err => res.status(500).send('ERROR ERROR ERROR!'))
  },

  update: (req, res) => {
    const db = req.app.get('db')
    const { desc } = req.query
    const { product_id } = req.params

    db.update_product(product_id, desc)
      .then(() => res.sendStatus(200))
      .catch(err => res.status(500).send('Big time error here doc.'))
  },

  delete: (req, res) => {
    const db = req.app.get('db')
    const { product_id } = req.params

    db.delete_product(product_id)
      .then(() => res.sendStatus(200))
      .catch(err => res.status(500).send('Product unable to be deleted.'))
  }
}