function StarsRating({ item = {} }) {

    const { avgVote, voto } = item
    const avgVoteInt = !isNaN(Number(avgVote)) ? Math.round(Number(avgVote)) : 0


    return (
        <div className="flex items-center gap-0.5 text-yellow-400">
            {[1, 2, 3, 4, 5].map((n) => (
                n <= (voto || avgVoteInt) ? <span key={n} className="text-lg">★</span> : <span key={n} className="text-lg">☆</span>
            ))}
        </div>
    )
}

export default StarsRating