
#include <stdio.h>
#include <math.h>

void main () 
{
    while(3)
    {
    int x[10], y[10], z[10], n, i ,a,b,c,d,m1 = 0, m2 = 0, m3 = 0,h,f1,f2,df,df2,cf;
    float r,q,k;
    int  grand_total, correction_factor,  total_n;
    int sum_of_sq_sample = 0,total_sum_of_sq_sample , vari_btw_the_sample,vari_within_the_sample;

    printf("\n\nEnter the serial number: ");
    scanf("%d", &n);
    total_n = n*3;
    printf("Total value of N: %d\n\n", total_n);
    printf("Entrs the first degree of freedom:-\n");
    scanf("%d",&df);
    printf("Entrs the second degree of freedom:-\n");
    scanf("%d",&df2);

    
    

    printf("Enter the values of M1:\n");
    
    for (i=1;i<=n;i++)
    
     {
        printf("m[%d]: ",i);
        scanf("%d",&x[i]);
        m1+=x[i];
        sum_of_sq_sample+=x[i]*x[i];
    }

    printf("Enter the values of M2:\n");
    for (i = 1; i <= n; i++) 
    {
        printf("m[%d]: ", i);
        scanf("%d", &y[i]);
        m2 += y[i];
        sum_of_sq_sample += y[i]*y[i];
    }

    printf("Enter the values of M3:\n");
    for (i=1;i<=n;i++) 
    
    {
        printf("m[%d]: ", i);
        scanf("%d",&z[i]);
        m3+=z[i];
        sum_of_sq_sample += z[i] *z[i];
    }
     
    printf("**********************************************\n\n");

    printf("\nSUM OF SAMPLE\n");
    printf("M1: %d\n", m1);
    printf("M2: %d\n", m2);
    printf("M3: %d\n\n", m3);

    printf("********************************************\n");
    grand_total = m1 + m2 + m3;
    printf("Grand Total: %d\n\n",grand_total);

    printf("********************************************\n");
    cf = grand_total*grand_total;
    correction_factor = cf/total_n;
    printf("Correction Factor: %d\n\n",correction_factor);

    printf("********************************************\n");
    printf("Sum of Squares of Sample: %d\n\n", sum_of_sq_sample);


    printf("********************************************\n\n");

    total_sum_of_sq_sample= sum_of_sq_sample-correction_factor;
    printf("total_sum_of_sq_sample=%d\n\n",total_sum_of_sq_sample);

    printf("********************************************\n\n");

   a=m1*m1;
   b=m2*m2;
   c=m3*m3;
   d=a+b+c;
   h=d/n;
   vari_btw_the_sample=h-correction_factor;
   printf("variance between the sample = %d \n\n",vari_btw_the_sample);

    printf("**********************************************\n\n");
    vari_within_the_sample=total_sum_of_sq_sample-vari_btw_the_sample;
    printf("vari_within_the_sample= %d\n\n",vari_within_the_sample);
    printf("**********************************************\n\n");
    printf("\n\nsource of information\t\tsum of sq of variance\t\td.f\t\tmean sq of source");
    printf("\n.....................................................................................................................................\n");
    printf("\n\n\n\nvarriance between\nthe sample");
    printf("\t\t\t   %d",vari_btw_the_sample);
    printf("\t\t\t%d",df);
    k=vari_btw_the_sample/df;
    printf("\t\t%f",k);
    
    

    printf("\n\n\n");
    printf("varriance within\nthe sample");
    printf("\t\t\t   %d",vari_within_the_sample);
    printf("\t\t\t %d",df2);
    q=vari_within_the_sample/df2;
    printf("\t\t%f\n\n\n",q);

    r=k/q;
    printf("\n\n\n\n\n F-ratio=[%f]",r);
    
    printf("\n.....................................................................................................................................\n");
  

    }
}
