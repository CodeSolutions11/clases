export const recorridoSimple = names => {

    names.forEach( e => {
        console.log(e);
    });
};

export const recorridoComplejo = users => {
    users.forEach( (e, i) => {
        console.log(e[0] );
        console.log(e[1]);
    });
}

