---
template: BlogPost
path: /learn-blockchain-by-building-one-of-your-own-with-python/
date: 2021-05-27T06:35:23.373Z
title: Learn How Blockchains work by building one of your own with Python
metaDescription: >-
  The fastest way to learn how Blockchains work is to build one. Learn how to
  build your own blockchain with python and flask.
thumbnail: /assets/Learn how to build your own blockchain with python and flask.png
---
One of the fastest ways to learn anything related to programming or any other domain is by creating it. You may be here because, like me, you’re fully anticipated about the rise of the cryptocurrencies market, or maybe you wanted to learn something new. Whatever might be the reason, at the end of this guide you’ll have a functioning Blockchain with a solid grasp of how they work (If you stick to learn the concepts and grasp them).

## What exactly is a Blockchain?
<div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/oBQZIgNobc7ewVWvCd" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/wow-doge-fractal-oBQZIgNobc7ewVWvCd">via GIPHY</a></p>
A blockchain is an immutable, sequential chain of records called blocks. It can contain transactions, files or any data value you may like to enter into it. But the most important thing is they are chained together using hashes. 

If you aren’t sure what a hash is, a hash is an output of hashing algorithms like MD5, SHA256 or many other hashing algorithms like them. Now without any further ado let’s start learning how to create our own blockchain. Before we begin, you should be comfortable reading and writing some [basic python code](https://simplifiedweb.netlify.app/introduction-to-python-a-masterclass-for-beginners), as well as have some understanding of [how HTTP requests work](https://simplifiedweb.netlify.app/how-the-web-works-under-the-hood), since our blockchain would be serving over HTTP. 

You’ll also need an HTTP Client, like Postman or cURL. I personally prefer [httpie](https://httpie.io/) but any client would work.

You can also find the final source code for this project on my GitHub profile.

You can install the required packages with this one-liner command

```
pip install Flask==0.12.2 requests==2.18.4
```

## Step 1: Creating a Blockchain 

Open your favourite code editor or IDE, personally I ❤️ VS Code. Create a file named blockchain.py. We’ll only use a single file, but if you get lost, you can always refer to the source code.

### Representing a Blockchain

We’ll create a Blockchain class whose constructor creates an initially empty list(to store our blockchain), and another to store our transactions( If you want to scale this blockchain you can also bring in these values from a database but that’s out the scope of this post, so we would use basic lists ). Here’s the blueprint of our blockchain class.


```python
class Blockchain(object):
    def __init__(self):
        self.chain = []
        self.current_transactions = []
        
    def new_block(self):
        # Creates a new Block and adds it to the chain
        pass
    
    def new_transaction(self):
        # Adds a new transaction to the list of transactions
        pass
    
    @staticmethod
    def hash(block):
        # Hashes a Block
        pass

    @property
    def last_block(self):
        # Returns the last Block in the chain
        pass
```


This blockchain class is responsible for managing the chain. It will store transactions and have some helper methods for adding new blocks to the chain. 


### What does a Block look like?

Each block has an index, a timestamp, a list of transactions(or in simpler terms data), a proof (more on that later), and the hash of a previous block.

Here’s an example of a block may look like:


```python
block = {
    'index': 1,
    'timestamp': 1506057125.900785,
    'transactions': [
        {
            'sender': "8527147fe1f5426f9dd545de4b27ee00",
            'recipient': "a77f5cdfa2934df3954a5c7c7da5df1f",
            'amount': 5,
        }
    ],
    'proof': 324984774000,
    'previous_hash': "2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824"
}
```


At this point the idea of a chain should be apparent - each new block within itself has the hash of the previous block. This is crucial because it’s the reason for blockchain’s immutability: If an attacker or hacker corrupted an earlier block in the chain then all subsequent blocks will contain incorrect hashes. 

_Does this make sense? If it doesn’t, take some time to let it sink in—it’s the core idea behind blockchains._


### Adding Transactions to a block

We’ll need a way of adding new data to our blockchain. Our new_transaction() method is responsible for this, and it’s pretty straightforward 


```python
class Blockchain(object):
    ...
    
    def new_transaction(self, sender, recipient, amount):
        """
        Creates a new transaction to go into the next mined Block
        :param sender: <str> Address of the Sender
        :param recipient: <str> Address of the Recipient
        :param amount: <int> Amount
        :return: <int> The index of the Block that will hold this transaction
        """

        self.current_transactions.append({
            'sender': sender,
            'recipient': recipient,
            'amount': amount,
        })

        return self.last_block['index'] + 1
```


After new_transaction() adds a transaction to the list, it returns the index of the block to which the transaction will be added—the next one to be mined. This will be useful later on, to the user submitting the transaction.


### Creating new Blocks

When our Blockchain is instantiated we’ll need to seed it with a genesis block—a block with no predecessors( The first block of a blockchain). We’ll also need to add a “proof” to our genesis block which is the result of mining (or proof of work). We’ll talk more about mining later.

In addition to creating the genesis block in our constructor, we’ll also add the methods for new_block(), new_transaction() and hash():


```python
import hashlib
import json
from time import time


class Blockchain(object):
    def __init__(self):
        self.current_transactions = []
        self.chain = []

        # Create the genesis block
        self.new_block(previous_hash=1, proof=100)

    def new_block(self, proof, previous_hash=None):
        """
        Create a new Block in the Blockchain
        :param proof: <int> The proof given by the Proof of Work algorithm
        :param previous_hash: (Optional) <str> Hash of previous Block
        :return: <dict> New Block
        """

        block = {
            'index': len(self.chain) + 1,
            'timestamp': time(),
            'transactions': self.current_transactions,
            'proof': proof,
            'previous_hash': previous_hash or self.hash(self.chain[-1]),
        }

        # Reset the current list of transactions
        self.current_transactions = []

        self.chain.append(block)
        return block

    def new_transaction(self, sender, recipient, amount):
        """
        Creates a new transaction to go into the next mined Block
        :param sender: <str> Address of the Sender
        :param recipient: <str> Address of the Recipient
        :param amount: <int> Amount
        :return: <int> The index of the Block that will hold this transaction
        """
        self.current_transactions.append({
            'sender': sender,
            'recipient': recipient,
            'amount': amount,
        })

        return self.last_block['index'] + 1

    @property
    def last_block(self):
        return self.chain[-1]

    @staticmethod
    def hash(block):
        """
        Creates a SHA-256 hash of a Block
        :param block: <dict> Block
        :return: <str>
        """

        # We must make sure that the Dictionary is Ordered, or we'll have inconsistent hashes
        block_string = json.dumps(block, sort_keys=True).encode()
        return hashlib.sha256(block_string).hexdigest()
```


The above code should be straightforward—I’ve added some comments and _docstrings_ to help keep it clear. We’re almost done with representing our blockchain. But at this point, you must be wondering how new blocks are created, forged or mined.


### Understanding Proof of Work

A Proof of Work algorithm (PoW) is how new Blocks are created or _mined _on the blockchain_. _The goal of PoW is to discover a number that solves a problem. The number must be **difficult to find** **but easy to verify**—computationally speaking—by anyone on the network. This is the core idea behind Proof of Work.

We’ll look at a very simple example to help this sink in.

Let’s decide that the _hash_ of some integer x multiplied by another integer y must end in “0”. So,

hash(x * y) = ac23dc...**0**

And for this simplified example, let’s fix x = 5

Implementing this in Python:


```python
from hashlib import sha256
x = 5
y = 0  # We don't know what y should be yet...
while sha256(f'{x*y}'.encode()).hexdigest()[-1] != "0":
    y += 1
print(f'The solution is y = {y}')
```


The solution here is y = 21. Since, the produced hash (sha256 hash of x=5, y=21) ends in 0.


```python
hash(5 * 21) = 1253e9373e...5e3600155e860
```


n Bitcoin, the Proof of Work algorithm is called[ Hashcash](https://en.wikipedia.org/wiki/Hashcash?ref=hackernoon.com). And it’s not too different from our basic example above. It’s the algorithm that miners race to solve in order to create a new block. In general, the difficulty is determined by the number of characters searched for in a string. The miners are then rewarded for their solution by receiving a coin—in a transaction.

The network is able to _easily _verify their solution.


### Implementing basic Proof of Work

Let’s implement a similar algorithm for our blockchain. Our rule will be similar to the example above:

Find a number p that when hashed with the previous block’s solution a hash with four leading 0s is produced

For eg., a valid hash would be **0000**aced...1022


```python
import hashlib
import json

from time import time
from uuid import uuid4


class Blockchain(object):
    ...
        
    def proof_of_work(self, last_proof):
        """
        Simple Proof of Work Algorithm:
         - Find a number p' such that hash(p*p') contains leading 4 zeroes, where p is the previous p'
         - p is the previous proof, and p' is the new proof
        :param last_proof: <int>
        :return: <int>
        """

        proof = 0
        while self.valid_proof(last_proof, proof) is False:
            proof += 1

        return proof

    @staticmethod
    def valid_proof(last_proof, proof):
        """
        Validates the Proof: Does hash(last_proof, proof) contain 4 leading zeroes?
        :param last_proof: <int> Previous Proof
        :param proof: <int> Current Proof
        :return: <bool> True if correct, False if not.
        """

        guess = f'{last_proof}{proof}'.encode()
        guess_hash = hashlib.sha256(guess).hexdigest()
        return guess_hash[:4] == "0000"
```


To adjust the difficulty of the algorithm, we could modify the number of leading zeroes. But 4 is sufficient. You’ll find out that the addition of a single leading zero makes a mammoth difference to the time required to find a solution.

Our class is almost complete and we’re ready to begin interacting with it using HTTP requests.


## Step 2: Create a Flask API to interact with our Blockchain

We’re going to use the [Python Flask Framework](simplifiedweb.netlify.app/introduction-to-micro-web-framework-flask). It’s a [micro-framework](simplifiedweb.netlify.app/introduction-to-micro-web-framework-flask) and it makes it easy to map endpoints to Python functions. This allows us to talk to our blockchain over the web using HTTP requests.

We’ll create three API endpoints:
*   /transactions/new to create a new transaction to a block
*   /mine to tell our server to mine a new block.
*   /chain to return the full Blockchain

### Setting up Flask

Our “server” will form a single node in our blockchain network. Let’s create some boilerplate code:

```python
import hashlib
import json
from textwrap import dedent
from time import time
from uuid import uuid4

from flask import Flask


class Blockchain(object):
    ...


# Instantiate our Node
app = Flask(__name__)

# Generate a globally unique address for this node
node_identifier = str(uuid4()).replace('-', '')

# Instantiate the Blockchain
blockchain = Blockchain()


@app.route('/mine', methods=['GET'])
def mine():
    return "We'll mine a new Block"
  
@app.route('/transactions/new', methods=['POST'])
def new_transaction():
    return "We'll add a new transaction"

@app.route('/chain', methods=['GET'])
def full_chain():
    response = {
        'chain': blockchain.chain,
        'length': len(blockchain.chain),
    }
    return jsonify(response), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
```

A brief explanation of what we’ve added above:
*   **Line 15:** Instantiates our Node. Read more about Flask [here](simplifiedweb.netlify.app/introduction-to-micro-web-framework-flask).
*   **Line 18:** Create a random name for our node.
*   **Line 21:** Instantiate our Blockchain class.
*   **Line 24–26:** Create the /mine endpoint, which is a GET request.
*   **Line 28–30:** Create the /transactions/new endpoint, which is a POST request, since we’ll be sending data to it.
*   **Line 32–38:** Create the /chain endpoint, which returns the full Blockchain.
*   **Line 40–41:** Runs the server on port 5000.


### The Transactions Endpoint

This is what the request for a transaction will look like. It’s what the user sends to the server:

```json
{
 "sender": "my address", # In real-world scenarios it will be public key.
 "recipient": "someone else's address",
 "amount": 5
}
```


Since we already have our class method for adding transactions to a block, the rest is easy. Let’s write the function for adding transactions:


```python
import hashlib
import json
from textwrap import dedent
from time import time
from uuid import uuid4

from flask import Flask, jsonify, request

...

@app.route('/transactions/new', methods=['POST'])
def new_transaction():
    values = request.get_json()

    # Check that the required fields are in the POST'ed data
    required = ['sender', 'recipient', 'amount']
    if not all(k in values for k in required):
        return 'Missing values', 400

    # Create a new Transaction
    index = blockchain.new_transaction(values['sender'], values['recipient'], values['amount'])

    response = {'message': f'Transaction will be added to Block {index}'}
    return jsonify(response), 201
```



### The Mining Endpoint

Our mining endpoint is where the magic happens, and it’s easy. It has to do three things:

*   Calculate the Proof of Work
*   Reward the miner (us) by adding a transaction granting us 1 coin
*   Forge the new Block by adding it to the chain

```python
...

@app.route('/mine', methods=['GET'])
def mine():
    # We run the proof of work algorithm to get the next proof...
    last_block = blockchain.last_block
    last_proof = last_block['proof']
    proof = blockchain.proof_of_work(last_proof)

    # We must receive a reward for finding the proof.
    # The sender is "0" to signify that this node has mined a new coin.
    blockchain.new_transaction(
        sender="0",
        recipient=node_identifier,
        amount=1,
    )

    # Forge the new Block by adding it to the chain
    previous_hash = blockchain.hash(last_block)
    block = blockchain.new_block(proof, previous_hash)

    response = {
        'message': "New Block Forged",
        'index': block['index'],
        'transactions': block['transactions'],
        'proof': block['proof'],
        'previous_hash': block['previous_hash'],
    }
    return jsonify(response), 200
```

Note that the recipient of the mined block is the address of our node. And most of what we’ve done here is just interact with the methods in our Blockchain class. At this point, we’re done and can start interacting with our blockchain.

## Step 3: Interacting with our Blockchain

You can use plain old cURL or Postman to interact with our API over a network. As I prefer [httpie](https://httpie.io/) I would be using it

Fire up the server by python blockchain.py

Let’s try mining a block by making a GET request to [http://localhost:5000/mine](http://localhost:5000/mine) :

![image](https://user-images.githubusercontent.com/55938019/119776829-0bd08280-bee3-11eb-9181-aeb683a08fa5.png)

Let’s create a new transaction by making a POST request to [http://localhost:5000/transactions/new](http://localhost:5000/transactions/new) with a body containing our transaction structure:

![image](https://user-images.githubusercontent.com/55938019/119776899-21de4300-bee3-11eb-8df8-f70c0f8ac1ab.png)

Let’s inspect the full chain by making a GET request to [http://locahost:5000/chain](http://locahost:5000/chain). 

![image](https://user-images.githubusercontent.com/55938019/119776939-33bfe600-bee3-11eb-965e-50485891e0f0.png)

## Step 4: Consensus

We’ve got a basic Blockchain that accepts transactions and allows us to mine new Blocks. But the whole point of Blockchains is that they should be _decentralized_. And if they’re decentralized, how on earth do we ensure that they all reflect the same chain? This is called the problem of _Consensus_, and we’ll have to implement a Consensus Algorithm if we want more than one node in our network.

### Registering new Nodes

Before we can implement a Consensus Algorithm, we need a way to let a node know about neighbouring nodes on the network. Each node on our network should keep a registry of other nodes on the network. Thus, we’ll need some more endpoints:
*   /nodes/register to accept a list of new nodes in the form of URLs.
*   /nodes/resolve to implement our Consensus Algorithm, which resolves any conflicts—to ensure a node has the correct chain.

We’ll need to modify our Blockchain’s constructor and provide a method for registering nodes:
```python
...
from urllib.parse import urlparse
...


class Blockchain(object):
    def __init__(self):
        ...
        self.nodes = set()
        ...

    def register_node(self, address):
        """
        Add a new node to the list of nodes
        :param address: <str> Address of node. Eg. 'http://192.168.0.5:5000'
        :return: None
        """

        parsed_url = urlparse(address)
        self.nodes.add(parsed_url.netloc)
```
Note that we’ve used a set() to hold the list of nodes. This is a cheap way of ensuring that the addition of new nodes is idempotent—meaning that no matter how many times we add a specific node, it appears exactly once.

### Implementing the Consensus Algorithm

As mentioned, a conflict is when one node has a different chain to another node. To resolve this, we’ll make the rule that _the longest valid chain is authoritative._ In other words, the longest chain on the network is the _de-facto_ one. Using this algorithm, we reach a_ Consensus_ amongst the nodes in our network.

```python
import requests

class Blockchain(object)
    ...    
    def valid_chain(self, chain):
        """
        Determine if a given blockchain is valid
        :param chain: <list> A blockchain
        :return: <bool> True if valid, False if not
        """

        last_block = chain[0]
        current_index = 1

        while current_index < len(chain):
            block = chain[current_index]
            print(f'{last_block}')
            print(f'{block}')
            print("\n-----------\n")
            # Check that the hash of the block is correct
            if block['previous_hash'] != self.hash(last_block):
                return False

            # Check that the Proof of Work is correct
            if not self.valid_proof(last_block['proof'], block['proof']):
                return False

            last_block = block
            current_index += 1

        return True

    def resolve_conflicts(self):
        """
        This is our Consensus Algorithm, it resolves conflicts
        by replacing our chain with the longest one in the network.
        :return: <bool> True if our chain was replaced, False if not
        """

        neighbours = self.nodes
        new_chain = None

        # We're only looking for chains longer than ours
        max_length = len(self.chain)

        # Grab and verify the chains from all the nodes in our network
        for node in neighbours:
            response = requests.get(f'http://{node}/chain')

            if response.status_code == 200:
                length = response.json()['length']
                chain = response.json()['chain']

                # Check if the length is longer and the chain is valid
                if length > max_length and self.valid_chain(chain):
                    max_length = length
                    new_chain = chain

        # Replace our chain if we discovered a new, valid chain longer than ours
        if new_chain:
            self.chain = new_chain
            return True

        return False
```


The first method valid_chain() is responsible for checking if a chain is valid by looping through each block and verifying both the hash and the proof.

resolve_conflicts() is a method that loops through all our neighbouring nodes, _downloads_ their chains and verifies them using the above method. **If a valid chain is found, whose length is greater than ours, we replace ours.**

Let’s register the two endpoints to our API, one for adding neighbouring nodes and the other for resolving conflicts:


```python
@app.route('/nodes/register', methods=['POST'])
def register_nodes():
    values = request.get_json()

    nodes = values.get('nodes')
    if nodes is None:
        return "Error: Please supply a valid list of nodes", 400

    for node in nodes:
        blockchain.register_node(node)

    response = {
        'message': 'New nodes have been added',
        'total_nodes': list(blockchain.nodes),
    }
    return jsonify(response), 201


@app.route('/nodes/resolve', methods=['GET'])
def consensus():
    replaced = blockchain.resolve_conflicts()

    if replaced:
        response = {
            'message': 'Our chain was replaced',
            'new_chain': blockchain.chain
        }
    else:
        response = {
            'message': 'Our chain is authoritative',
            'chain': blockchain.chain
        }

    return jsonify(response), 200
```


At this point, you can grab a different machine if you like, and spin up different nodes on your network. Or spin up processes using different ports on the same machine. I spun up another node on my machine, on a different port, and registered it with my current node. Thus, I have two nodes: [http://localhost:5000](http://localhost:5000/?ref=hackernoon.com) and [http://localhost:5001](http://localhost:5001).

![image](https://user-images.githubusercontent.com/55938019/119777172-72ee3700-bee3-11eb-89bb-bc2cd4ac4ad6.png)

I then mined some new Blocks on node 2, to ensure the chain was longer. Afterwards, I called GET /nodes/resolve on node 1, where the chain was replaced by the Consensus Algorithm:

![image](https://user-images.githubusercontent.com/55938019/119777225-7e416280-bee3-11eb-9944-1371f861c87d.png)

## Conclusion

And that’s a wrap to this article... Go get some friends together to help test out your Blockchain. 

I hope that this has inspired you to create something new. I’m excited about Cryptocurrencies because I believe that Blockchains will rapidly change the way we think about economies, governments and record-keeping. 

Here as there are no centralized authorities to control the market people or network is the real king here👑. You can also implement a transaction validation mechanism to ensure your transactions are validated and if any corruption occurs in the chain the whole network gets notified.
