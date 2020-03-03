const buildResponse = (successful, res) => {
    return {
        successful,
        [successful ? "data": "err"]: res
    }
};

export {buildResponse};