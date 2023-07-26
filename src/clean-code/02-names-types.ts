(() => {
    const temperaturesCelsius = [33.6, 12.34];

    const serverIp = '123.123.123.123';

    const users = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    const emailUsers = users.map( user => user.email );

    const canJump = false;
    const canRun = true;
    const hasItems = true;
    const isLoading = false;

    const initialTime = new Date().getTime();
    const finalTime = new Date().getTime() - initialTime;


    function getBooks() {
        throw new Error('Function not implemented.');
    }

    function getBooksByURL( url: string) {
        throw new Error('Function not implemented.');
    }
    
    function getSquareArea( side: number ) {
        throw new Error('Function not implemented.');
    }

    function printJob() {
        throw new Error('Function not implemented.');
    }
})();
