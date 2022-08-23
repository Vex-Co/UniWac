import mdb from 'mongoose';

mdb.connect('mongodb://localhost/UniWac');

export const mongoose = mdb;
