async function main () {
    const address = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
    const Box = await ethers.getContractFactory('MyToken');
    const box = await Box.attach(address);

    
        // uint256 _totalNft;
        const arr=[]
        for(i=0;i<400;i++){
            let inc = i+1;
            arr.push("https://www."+inc+".com")
        }
        // console.log(arr);
        console.log("process...")

    await box.batchMint("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",400,arr);
    console.log("done")
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });