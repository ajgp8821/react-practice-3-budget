export const budgetReview = (budget, remaining) => {
    let clase;

    // 25%
    if ( (budget / 4) > remaining ){
        clase = 'alert alert-danger';
    }
    // 50%
    else if ( (budget / 2) > remaining ) {
        clase = 'alert alert-warning';
    }
    else {
        clase = 'alert alert-success';
    }

    return clase;
}
