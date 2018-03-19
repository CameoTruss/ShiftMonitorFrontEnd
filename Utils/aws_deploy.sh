#!/bin/bash

aws s3 rm --recursive s3://cameotruss.io/
aws s3 cp --recursive ../build/ s3://cameotruss.io/