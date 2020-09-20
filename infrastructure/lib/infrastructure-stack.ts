import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import * as iam from '@aws-cdk/aws-iam';

export class InfrastructureStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const bucket = new s3.Bucket(this, 'WebsiteBucket', {
      bucketName: 'simple-vue-cdk-app',
      websiteIndexDocument: 'index.html', //Specify the index document for our website
      blockPublicAccess: new s3.BlockPublicAccess({ restrictPublicBuckets: false }) //Allow public access to our bucket
    });

    //Create a bucket policy allowing anyone to access the objects in our bucket
    const bucketPolicy = new iam.PolicyStatement({
      actions: ['s3:GetObject'],
      resources: [
        `${bucket.bucketArn}/*`
      ],
      principals: [new iam.Anyone()],
    })
    bucket.addToResourcePolicy(bucketPolicy); // Add the policy to our bucket

  }
}
