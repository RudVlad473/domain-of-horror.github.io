function* idGenerator(startingId: number) {
    for (let newId = startingId; ; newId++) {
        yield newId
    }
}
