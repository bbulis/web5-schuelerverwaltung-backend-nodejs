const buildResponse = (successful, res, e=null) => {
    if(e !== null) {
        console.log(successful, res, e);
    }
    return {
        successful,
        [successful ? "data": "err"]: res
    }
};

export {buildResponse};