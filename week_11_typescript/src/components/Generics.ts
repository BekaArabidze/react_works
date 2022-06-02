export const Generics = <S>(arr:S[]):S[] => {
    return arr
}


const exp1 = Generics([1,2,3,4])
const exp2 = Generics(["2","234"])


