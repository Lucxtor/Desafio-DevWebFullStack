interface IRequest {
    n: number;
}

class CalculateDividersUseCase {
    execute({ n }: IRequest): number {
        return n;
    }
}

export { CalculateDividersUseCase };
