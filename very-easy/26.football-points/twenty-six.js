function footballPoints(wins, draws, losses) {
	let a = 3
    let b = 1
    let c = 0
    let result = (wins * a) + (draws * b) + (losses * c)
    return result
}