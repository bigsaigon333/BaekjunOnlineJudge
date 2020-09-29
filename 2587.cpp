#include <bits/stdc++.h>
using namespace std;

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int num[5];
    int sum = 0;

    for (int i = 0; i < 5; i++)
    {
        cin >> num[i];
        sum += num[i];
    }

    for (int i = 0; i < 5; i++)
    {
        for (int j = i + 1; j < 5; j++)
        {
            if (num[i] > num[j])
            {
                int temp = num[i];
                num[i] = num[j];
                num[j] = temp;
            }
        }
    }

    cout << sum / 5 << "\n";

    cout << num[2] << "\n";
}