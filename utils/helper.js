const delay = ms => new Promise((accept, _reject) => setTimeout(accept, ms))

module.exports = {
	delay
}