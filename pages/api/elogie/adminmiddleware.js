export default (req, res) => {
	const {
		method,
  query: { pass },
 } = req
 console.log(pass)
	if(method !== 'GET') return res.status(405).send(false)
	if(pass === undefined) return res.status(400).send(false)
	if(pass.length <= 0) return res.status(400).send(false)
	if(pass !== "bismillah") return res.status(400).send(false)

	res.status(200).send(true)
}