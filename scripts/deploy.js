async function main() {
    const MyToken = await ethers.getContractFactory("MyToken")
  
    // Start deployment, returning a promise that resolves to a contract object
    const user1 = await ethers.getSigners()
    // console.log(`user1:`,user1[0].address);
    
    const myToken = await MyToken.deploy(user1[0].address)
    await myToken.deployed()
    // let receipt = await tx.wait();
    // console.log(receipt + "receipt");
    console.log("Contract deployed to address:", myToken.address)

    const address = myToken.address;
    const Box = await ethers.getContractFactory('MyToken');
    const box = await Box.attach(address);

    
        // uint256 _totalNft;
        const arr=[]
        for(i=0;i<40;i++){
            let inc = i+1;
            arr.push("https://www."+inc+".com")
        }
        // console.log(arr);
        console.log("process...")

    const tX = await box.batchMint("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",40,arr);
    console.log("done")
    
    
 
    const tx = await tX.wait();
    // console.log(tx);
    console.log("txhash "+tx.transactionHash);

       const trace = await hre.network.provider.send("debug_traceTransaction", [
      tx.transactionHash,
    ]);
    console.log(trace);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  