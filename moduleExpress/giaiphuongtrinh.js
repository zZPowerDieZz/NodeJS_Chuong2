function ptb1(a,b){
    if (a == 0){
        if(b==0){
            return "Phương trình vô số nghiệm";
        }else{
            return "Phương trình vô nghiệm";
        }
    }else{
        let x = -b / a;
        return `Phương trình bậc 1 có nghiệm x = ${x}`;
    }
}

function ptb2(a,b,c){
    if(a==0){
        return ptb1(b,c);
    }else{
        let delta = b * b - 4 * a * c;
        if(delta<0){
            return "Phương trình bậc 2 vô nghiệm";
        }
        if(delta ==0){
            let x = -b / (2 * a);
            return `Phương trình bậc 2 có nghiệm kép x = ${x}`;
        }
        if(delta > 0){
            let x1 = (-b + Math.sqrt(delta)) / (2 * a);
            let x2 = (-b - Math.sqrt(delta)) / (2 * a);
            return `Phương trình bậc 2 có nghiệm x1 = ${x1} x2 = ${x2}`;
        }
    }
}

module.exports =(ptb1,ptb2);
