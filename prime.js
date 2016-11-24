(
    p=[2],
    function prime(n){
        return p.length<500?
            (p.map(
                (e)=>{
                    return n%e==0?1:0
                }).reduce(
                    (a,b)=>{
                        return a+b;
                    })==0?
                        (p.push(n),prime(n+1)):
                        (prime(n+1))
            ):
            p;
    }
)(2).map(
    (e)=>{
        var s='';
        return (
            function k(n){
                return n<1?
                    (s+e):
                    (s+="-",k(n-1))
            })
        (e)
    }
)