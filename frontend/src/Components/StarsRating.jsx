function StarsRating({ item = {} }) {

    const { avgVote } = item
    const avgVoteInt = Math.round(avgVote)

    return (
        
        <div className="flex items-center gap-0.5 text-yellow-400">
            {[1, 2, 3, 4, 5].map((n) => (
                n <= avgVoteInt ? <span key={n} className="text-lg">★</span> : <span key={n} className="text-lg">☆</span>
            ))}
        </div>
    )
}

export default StarsRating