interface IRequest {
    valor: number;
}

class CalculateDividersUseCase {
    execute({ valor }: IRequest): number {
        const factors = [];
        let aux = valor;
        let count = 0;

        while (aux !== 1) {
            count = 2;
            while (aux % count !== 0) {
                count += 1;
            }
            factors.push(count);
            aux /= count;
        }

        count = 1;
        let factor = 1;
        let dividers = 1;
        for (count; count <= factors.length; count += 1) {
            if (factors[count] === factors[count - 1]) {
                factor += 1;
            } else {
                factor += 1;
                dividers *= factor;
                factor = 1;
            }
        }

        return dividers;
    }
}

export { CalculateDividersUseCase };
