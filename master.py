
# coding: utf-8

# In[9]:

import web3
from web3 import Web3
import requests,json, time,random
import pandas as pd
from Naked.toolshed.shell import execute_js, muterun_js, run_js

public_address = "";
private_key = "";
nonce = 135;
gasPrice = 21;


def clearNonce():
	arg_string =""+ str(nonce) + " "+str(private_key)+" "+str(gasPrice)+" "+str(public_address)
	run_js('submitter.js',arg_string);

clearNonce();
